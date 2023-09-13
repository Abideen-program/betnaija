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
  usertype: string
};
