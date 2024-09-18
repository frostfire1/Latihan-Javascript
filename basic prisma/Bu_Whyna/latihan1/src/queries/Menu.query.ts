import { PrismaClient, Prisma } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getAllMenus = async () => {
  const Menu = await prisma.menu.findMany();
  return Menu;
};
export const getMenuName = async (Name: string) => {
  const Menu = await prisma.menu.findMany({
    where: {
      name: {
        contains: Name,
      },
    },
  });
  return Menu;
};

export const getMenuByUuid = async (uuid: string) => {
  const Menu = await prisma.menu.findUnique({
    where: {
      uuid: uuid,
    },
  });
  return Menu;
};

export const createMenu = async (name: string, price: number, picture? : string, description? : string) => {
  const Menu = await prisma.menu.create({
    data: {
      uuid: uuidv4(),
      name: name,
      price: price,
      picture: picture,
      description: description
    },
  });
  return Menu;
};
