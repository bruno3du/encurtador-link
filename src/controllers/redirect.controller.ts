import { URLModel } from "../database/models/shorten.model";
import { Response, Request } from "express";

export class redirectionController {
  public async get(req: Request, res: Response) {
    const { hash } = req.params;

    const isHash = await URLModel.findOne({ hash });

    console.log(isHash);
    if (isHash) {
      const { originURL } = isHash;
      res.redirect(originURL);
      return;
    }

    res.status(400).json({ error: "URL not found" });
  }
}
