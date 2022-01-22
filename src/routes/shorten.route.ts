import { Response, Request, Router } from 'express'

const shortenRoute = Router()

shortenRoute.post('/shorten', (req: Request, res: Response) => {
  return res.status(200).json({ "json": "OK"})
})

export default shortenRoute