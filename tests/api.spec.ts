import { APIResponse, test, expect} from '@playwright/test';


test.describe(`Fail Signup Test`, async () => {
  const signupEndpoint = `https://thinking-tester-contact-list.herokuapp.com/users`;
  const userSignupPayload = { firstName: 'kjjkkj',
                              lastName: 'mklkl',
                              email: 'aploiuer1@xylz.com', 
                              password: 'jlkjl990' 
                             };

  test(`Verify a new user is able to signup using API`, async ({ request }) => {

    const signupApiResponse:APIResponse = await request.post(signupEndpoint, {
      data: userSignupPayload,
    });

    const apiStatusCode:number = signupApiResponse.statusText()

    expect(apiStatusCode,`verify status text`).toBe("Bad Request")

  });
});