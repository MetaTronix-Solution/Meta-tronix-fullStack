import express from "express";
import CareersController from "../controllers/careers.controller";
import { protect, authorizeRoles } from "../middleware/auth.middleware";
import { validate } from "../middleware/validate.middleware";
import {
  createCareerSchema,
  updateCareerSchema,
  updateCareerStatusSchema,
} from "../validators/careers.validator";

const router = express.Router();

/**
 * @openapi
 * /api/v1/careers:
 *   get:
 *     summary: Get all career postings
 *     tags: [Careers]
 *     responses:
 *       200:
 *         description: List of career postings
 */
router.get("/", CareersController.handleGetCareers);

/**
 * @openapi
 * /api/v1/careers/{id}:
 *   get:
 *     summary: Get a career posting by ID
 *     tags: [Careers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Career found
 *       400:
 *         description: Invalid career ID
 *       404:
 *         description: Career not found
 */
router.get("/:id", CareersController.handleGetCareerById);

/**
 * @openapi
 * /api/v1/careers:
 *   post:
 *     summary: Create a career posting (admin only)
 *     tags: [Careers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, department, location, employmentType, workplace, description, experience]
 *             properties:
 *               title:
 *                 type: string
 *               department:
 *                 type: string
 *               location:
 *                 type: string
 *               employmentType:
 *                 type: string
 *                 enum: [full-time, part-time, contract, internship, remote]
 *               workplace:
 *                 type: string
 *                 enum: [onsite, remote, hybrid]
 *               description:
 *                 type: string
 *               experience:
 *                 type: string
 *               vacancies:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [draft, open, closed]
 *     responses:
 *       201:
 *         description: Career created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Access token missing/invalid
 *       403:
 *         description: Forbidden — admin role required
 */
router.post(
  "/",
  protect,
  authorizeRoles("ADMIN"),
  validate(createCareerSchema),
  CareersController.handleCreateCarrer,
);

/**
 * @openapi
 * /api/v1/careers/{id}:
 *   put:
 *     summary: Update a career posting (admin only)
 *     tags: [Careers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Career updated
 *       400:
 *         description: Invalid ID or validation error
 *       401:
 *         description: Access token missing/invalid
 *       403:
 *         description: Forbidden — admin role required
 *       404:
 *         description: Career not found
 */
router.put(
  "/:id",
  protect,
  authorizeRoles("ADMIN"),
  validate(updateCareerSchema),
  CareersController.handleUpdateCareer,
);

/**
 * @openapi
 * /api/v1/careers/{id}/status:
 *   patch:
 *     summary: Update only the status of a career posting (admin only)
 *     tags: [Careers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [draft, open, closed]
 *     responses:
 *       200:
 *         description: Status updated
 *       400:
 *         description: Invalid ID or invalid status value
 *       401:
 *         description: Access token missing/invalid
 *       403:
 *         description: Forbidden — admin role required
 *       404:
 *         description: Career not found
 */
router.patch(
  "/:id/status",
  protect,
  authorizeRoles("ADMIN"),
  validate(updateCareerStatusSchema),
  CareersController.handleUpdateCareerStatus,
);

/**
 * @openapi
 * /api/v1/careers/{id}:
 *   delete:
 *     summary: Delete a career posting (admin only)
 *     tags: [Careers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Career deleted successfully
 *       400:
 *         description: Invalid career ID
 *       401:
 *         description: Access token missing/invalid
 *       403:
 *         description: Forbidden — admin role required
 *       404:
 *         description: Career not found
 */
router.delete(
  "/:id",
  protect,
  authorizeRoles("ADMIN"),
  CareersController.handleDeleteCareer,
);

export default router;
