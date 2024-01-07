import Koa, { Next } from "koa";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

import * as service from "./service";
import { log } from "console";
import prisma from "../../../services/database";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export async function loginUser(context: Koa.Context) {
  const { identifier, password } = context.request.body;

  try {
    const user = await service.loginUser(identifier, password);

    if (!user) {
      context.status = 401;
      context.body = {
        errors: [
          "Invalid identifier or password",
        ],
      };
      return;
    }

    const jwt = jsonwebtoken.sign({ id: user.id }, JWT_SECRET);

    context.body = {
      data: {
        jwt,
        user,
      }
    };
  } catch (e: any) {
    context.status = 401;
    context.body = {
      errors: [
        e,
      ],
    };
    return;
  }
}

export async function userMe(context: Koa.Context) {

  const { id } = context.user;

  try {
    const user = await service.userMe(id);

    if (!user) {
      context.status = 401;
      context.body = {
        errors: [
          "Invalid identifier or password",
        ],
      };
      return;
    }

    const jwt = jsonwebtoken.sign({ id: user.id }, JWT_SECRET);

    context.body = {
      data: {
        jwt,
        user,
      }
    };
  } catch (e: any) {
    context.status = 401;
    context.body = {
      errors: [
        e,
      ],
    };
    return;
  }
}

export async function userMeProfile(context: Koa.Context) {

  const { id } = context.user;

  try {
    const user = await service.userMe(id);

    if (!user) {
      context.status = 401;
      context.body = {
        errors: [
          "Invalid identifier or password",
        ],
      };
      return;
    }

    const profile = await service.getProfile(id);

    context.body = {
      data: profile,
    };
  } catch (e: any) {
    context.status = 401;
    context.body = {
      errors: [
        e,
      ],
    };
    return;
  }
}

export async function changePassword(context: Koa.Context) {
  const { id } = context.user;
  const { new_password } = context.request.body;

  if (!new_password)
    context.status = 401;
    context.body = {
    errors: [
      "New password cannot be empty",
    ],
  };
  
  try {
    const user = await service.userMe(id);

    if (!user) {
      context.status = 401;
      context.body = {
        errors: [
          "Invalid identifier or password",
        ],
      };
    }

    var newUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: new_password,
      },
    });

    context.body = {
      data: newUser
    };
  } catch (e: any) {
    context.status = 401;
    context.body = {
      errors: [
        e,
      ],
    };
    return;
  }
}

export async function authenticate(context: Koa.Context, next: Next) {
  const authHeader = context.request.header.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jsonwebtoken.verify(token, JWT_SECRET, (err: any, user: any) => {
      if (err) {
        console.log(err);

        context.status = 403;

        context.body = {
          errors: [
            "Invalid token",
          ],
        };

        return;
      }

      context.user = user;
    });
  } else {
    context.status = 401;
    context.body = {
      errors: [
        "Unauthorized",
      ],
    };
    return;
  }

  await next();
}
