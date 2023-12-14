import Koa, { Next } from 'koa';
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

import * as authService from "../services/auth.service";
import * as userService from "../services/user.service";
import prisma from "../../features/prisma";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export async function loginUser(context : Koa.Context) {
  const { identifier, password } = context.request.body;

  console.log(context.request.body);

  try {
    const user = await authService.loginUser(identifier, password);

    if (!user) {
      context.status = 401;
      context.body = {
        error: {
          message: "Invalid identifier or password",
        },
      };
      return;
    }

    const jwt = jsonwebtoken.sign({ id: user.id }, JWT_SECRET);
    const profile = await userService.getProfile(user.id);

    context.body = {
      jwt,
      user,
      profile,
    };
  } catch (e: any) {
    context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
    return;
  }
}

export async function userMe(context : Koa.Context) {
  
  const { id } = context.user;
  
  try {
    const user = await authService.userMe(id);

    if (!user) {
      context.status = 401;
      context.body = {
        error: {
          message: "Invalid identifier or password",
        },
      };
      return;
    }

    const jwt = jsonwebtoken.sign({ id: user.id }, JWT_SECRET);
    const profile = await userService.getProfile(user.id);
    
    context.body = {
      jwt,
      user,
      profile,
    };
  } catch (e: any) {
    context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
    return;
  }
}

export async function changePassword(context : Koa.Context) {
  const { id } = context.user;
  const { newPassword } = context.request.body;

  try {
    const user = await authService.userMe(id);

    if (!user) {
      context.status = 401;
      context.body = {
        error: {
          message: "Invalid identifier or password",
        },
      };
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: newPassword,
      },
    });

    
  } catch (e: any) {
    context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
    return;
  }
}

export async function registerUser(context : Koa.Context) {
  var { identifier, password, role, data } = context.request.body;

  if (data == null) {
    data = {};
  }

  try {
    if (!identifier || !password || !role) {
      context.status = 401;
      context.body = {
        error: {
          message: "Invalid (identifier, password, accessCode)",
        },
      };
    }

    const registerData = await authService.registerUser(
      identifier,
      password,
      role,
      data
    );
  } catch (e: any) {
    context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
    return;
  }
}

export async function authenticate(context : Koa.Context, next : Next) {
  const authHeader = context.request.header.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jsonwebtoken.verify(token, JWT_SECRET, (err: any, user: any) => {
      if (err) {
        console.log(err);

        context.status = 403;

        context.body = {
          error: {
            message: "Invalid token",
          },
        };

        return;
      }

      context.user = user;
    });
  } else {
    context.status = 401;
    context.body = {
      error: {
        message: "Unauthorized",
      },
    };
    return;
  }

  await next();
}
