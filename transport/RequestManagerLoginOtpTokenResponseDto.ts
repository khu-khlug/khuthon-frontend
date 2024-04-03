export class RequestManagerLoginOtpTokenResponseDto {
  otpToken: string;

  constructor(otpToken: string) {
    this.otpToken = otpToken;
  }
}
