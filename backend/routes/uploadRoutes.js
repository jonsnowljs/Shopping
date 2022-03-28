import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();
//TODO understand this multer code
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// /api/upload
router.post('/', upload.single('image'), (req, res) => {
  console.log(req.file);
  // path: 'uploads\\image-1648260566615.png',
  res.send(`/${req.file.path}`);
  console.dir(res);
});

export default router;