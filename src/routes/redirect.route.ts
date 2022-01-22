import { Response, Request, Router } from 'express'

const redirectRoute = Router()

redirectRoute.get('/:hash', (req: Request, res: Response) => {
  return res.status(200).json({ "json": "OK"})
})

export default redirectRoute