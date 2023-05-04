using Amazon;
using Amazon.SecretsManager;
using Amazon.SecretsManager.Model;

public static class Secrets{
   public static async Task<string> GetDBSecret(){
        string secretName = "spore-db-cloud-sql";
        string region = "us-east-2";

        IAmazonSecretsManager client = new AmazonSecretsManagerClient(RegionEndpoint.GetBySystemName(region));

        GetSecretValueRequest request = new GetSecretValueRequest
        {
                 SecretId = secretName,
                VersionStage = "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified.
        };

        GetSecretValueResponse response;

        try
        {
            response = await client.GetSecretValueAsync(request);
        }
        catch (Exception e)
        {
        // For a list of the exceptions thrown, see
        // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
            throw e;
        }

        string secret = response.SecretString;
        return secret;
    }

    public static async Task<string> GetJWTSecret(){
        string secretName = "JWT-key";
        string region = "us-east-2";

        IAmazonSecretsManager client = new AmazonSecretsManagerClient(RegionEndpoint.GetBySystemName(region));

        GetSecretValueRequest request = new GetSecretValueRequest{
            SecretId = secretName,
            VersionStage = "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified.
        };

        GetSecretValueResponse response;

        try{
            response = await client.GetSecretValueAsync(request);
        }
        catch (Exception e){
        // For a list of the exceptions thrown, see
        // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
            throw e;
        }

        string secret = response.SecretString;
        return secret;
    }
}