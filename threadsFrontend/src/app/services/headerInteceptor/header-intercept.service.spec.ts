import { HeaderInterceptService } from './header-intercept.service';
import { AuthorizationService } from '../auth/authorization.service';
import { HttpHandler, HttpHeaderResponse, HttpRequest } from '@angular/common/http';
import { of } from 'rxjs';

describe('HeaderInterceptService', () => {
  let service: HeaderInterceptService;
  let authSpy: jasmine.SpyObj<AuthorizationService>;
  let headerHandler: HttpHandler;

  beforeEach(() => {

    authSpy = jasmine.createSpyObj("AuthorizationService", ["getToken"]);
    service = new HeaderInterceptService(authSpy);
    headerHandler = { handle: (req) => of(new HttpHeaderResponse({headers: req.headers}))};

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should attatch a string to the header of a request', () => {
    authSpy.getToken.and.returnValue("Token");
    let mockRequest = new HttpRequest("GET", "dummyURL");
    service.intercept(mockRequest, headerHandler)
           .subscribe((req) => {expect((req as HttpHeaderResponse).headers.get("Authorization")).toEqual("Bearer Token")});
  });

  it('should attatch a string to the header of a request', () => {
    authSpy.getToken.and.returnValue(null);
    let mockRequest = new HttpRequest("GET", "dummyURL");
    service.intercept(mockRequest, headerHandler)
           .subscribe((req) => {expect((req as HttpHeaderResponse).headers.get("Authorization")).toEqual("Bearer null")});
  });

  });
