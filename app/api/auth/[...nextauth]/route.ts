import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const provider: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign In", // provider name 정의
      credentials: {
        // 자격 증명에 사용될 필드 정의
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 로그인 로직 정의
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/jwt`, {
          method: "POST",
          body: JSON.stringify(credentials),
        });

        const data = await res.json();

        if (data.data.result) {
          return data.data.token;
        }

        throw new Error("Login Failed");
      },
    }),
  ],
  callbacks: {
    session: async (session: any) => {
      return session;
    },
    jwt: async ({ token, user }: any) => {
      if (user) {
        // eslint-disable-next-line prefer-destructuring, no-param-reassign
        token.accessToken = user;
      }

      return token;
    },
  },
};

const handler = NextAuth(provider);

export { handler as GET, handler as POST };
