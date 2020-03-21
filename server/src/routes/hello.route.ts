import { Router } from 'express'

import { HelloController } from 'controllers/hello.controller'

const router = Router()

router.get('/', HelloController.getRoot)

export { router as helloRouter }
