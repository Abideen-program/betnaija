export type AuthFormProps = {
  user: {
    usertype: string;
    ngo_name: string;
    office_address: string;
    phone: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    cac: string;
    date_of_registration: string;
    website_url: string;
    agent_code: string;
  };

  setUser: React.Dispatch<
    React.SetStateAction<{
      usertype: string;
      ngo_name: string;
      office_address: string;
      phone: string;
      firstname: string;
      lastname: string;
      email: string;
      password: string;
      cac: string;
      date_of_registration: string;
      website_url: string;
      agent_code: string;
    }>
  >;
};

export type LoginInputs = {
  email: string;
  password: string;
};

export type RegisterInputs = {
  email: string;
  password: string;
  phone: string;
  password_confirmation: string;
  usertype: string;
};

export type OtpData = {
  email?: string;
  otp: string;
};

export type ResendOtpData = {
  email?: string;
};

export type EmailInputs = {
  email: string;
};

export type ChangePasswordData = {
  otp: string;
  password: string;
  password_confirmation: string;
};

export type AgentDetails = {
  // name: string;
  firstName?: string;
  lastName?: string;
  agent_code?: string;
  office_address?: string;
  region?: string;
  ngo_name?: string;
  personalName?: string;
  usertype?: string;
};

export type NgoDetails = {
  name: string;
  office_address: string;
  region: string;
  ngo_name: string;
  personalName: string;
  cac: string;
  document: string;
  date_of_registration: string;
  website_url: string;
};

export type DataCardProps = {
  title: string;
  amount: string;
  label: string;
};

export type DashbordGrantTables = {
  data: {
    id: number;
    title: string;
    amount: number;
    status: string;
  }[];

  heading: string;
};
