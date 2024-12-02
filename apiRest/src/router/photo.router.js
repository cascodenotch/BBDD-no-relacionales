const {Router} = require ("express")
const router = Router();
const photoCtrl = require("../controller/photo.controller")

router.get("/photos", photoCtrl.get);

router.post("/photos", photoCtrl.guardar);

router.put("/photos", photoCtrl.editar);

router.delete("/photos", photoCtrl.deleteOne);

router.delete("/photos", photoCtrl.deleteAll);

module.exports = router;
