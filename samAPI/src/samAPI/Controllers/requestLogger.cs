using System.Text;
using Amazon.Lambda.Core;

public static class RequestLogger
{
    public static void GetDetails(HttpRequest request)
    {
        string baseUrl = $"{request.Scheme}://{request.Host}{request.Path}{request.QueryString.Value}";
        StringBuilder sbHeaders = new StringBuilder();
        foreach (var header in request.Headers)
            sbHeaders.Append($"{header.Key}: {header.Value}\n");

        string body = "no-body";
        if (request.Body.CanSeek)
        {
            request.Body.Seek(0, SeekOrigin.Begin);
            using (StreamReader sr = new StreamReader(request.Body))
                body = sr.ReadToEnd();
        }

        LambdaLogger.Log($"{request.Protocol} {request.Method} {baseUrl}\n\n{sbHeaders}\n{body}");
    }
}