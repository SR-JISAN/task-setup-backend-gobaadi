export interface IUser {
  name: string;
  email: string;
  password: string;
  imageURL?: string;
  profile?: IProfile;
}

interface IProfile {
  bio?: string;
  address?: string;
  occupation?: string;
  contactNumber?: string;
  dateOfBirth?: string;
}

export interface IVerifyEmail {
  email: string;
  otp: string;
}
