import { Router } from 'itty-router'

import rickroll from "./routes/rickroll";
import teapot from "./routes/teapot";


const router = Router({base: '/api'})


router.get("/secret", rickroll)
router.get("/", teapot)

router.all("*", () => new Response("404, not found!", { status: 404 }))

export default router