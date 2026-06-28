import multer, { StorageEngine, FileFilterCallback } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { Request } from 'express';

// ─── Constants ────────────────────────────────────────────────────────────────

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'avatars');
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

// ─── Ensure upload directory exists ───────────────────────────────────────────

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// ─── Disk storage ─────────────────────────────────────────────────────────────

const storage: StorageEngine = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, UPLOAD_DIR);
  },
  filename(req: Request, file, cb) {
    const userId = req.params?.id ?? 'unknown';
    const ext = path.extname(file.originalname).toLowerCase();
    const filename = `avatar-${userId}-${Date.now()}${ext}`;
    cb(null, filename);
  },
});

// ─── File filter ──────────────────────────────────────────────────────────────

const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
): void => {
  if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG, PNG, and WebP images are allowed'));
  }
};

// ─── Exported middleware ───────────────────────────────────────────────────────

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: MAX_FILE_SIZE_BYTES },
});

/** Single-file upload middleware for the `avatar` field. */
export const uploadAvatar = upload.single('avatar');
