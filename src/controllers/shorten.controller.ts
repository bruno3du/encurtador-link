import { URLModel } from "../database/models/shorten.model";
import { Response, Request } from "express";
import { nanoid } from "nanoid";
import { isUri } from "valid-url";

export class ShortenController {
  public async create(req: Request, res: Response) {
    const { originURL } = req.body;
    const link = isUri(originURL);

    if (!link) {
      res
        .status(400)
        .json({ message: "Verify if you are sending a valid url" });
      return;
    }

    const isShortedUrlExist = await URLModel.findOne({ originURL });

    if (isShortedUrlExist) {
      res.json(isShortedUrlExist);
      return;
    }

    const hash = nanoid();
    const shortURL = `${process.env.API_URL}/${hash}`;

    const newURL = await URLModel.create({ hash, shortURL, originURL });

    return res.status(201).json(newURL);
  }
}
