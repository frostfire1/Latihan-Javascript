import {Request,Response} from 'express';
import { getAllMenus, createMenu, getMenuName, getMenuByUuid} from '../queries/Menu.query';

export const dapatSemuaMenu = async (req: Request, res: Response) => {
    try {
        const Menu = await getAllMenus();
        return res.status(200).json(Menu);
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const buatMenu = async (req: Request, res: Response) => {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const Menu = await createMenu(name, price);
        return res.status(200).json(Menu);
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const dapatMenubyNama = async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        const Menu = await getMenuName(name);
        return res.status(200).json(Menu);
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const dapatMenubyUuid = async (req: Request, res: Response) => {
    try {
        const { uuid } = req.query.uuid as { uuid: string };
        const Menu = await getMenuByUuid(uuid);
        return res.status(200).json(Menu);
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
}