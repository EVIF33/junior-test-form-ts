import { z } from 'zod';

export const validationSchema = z
  .object({
    title: z
      .string()
      .min(1, 'Название обязательно для заполнения')
      .min(2, 'Название должно содержать минимум 2 символа')
      .max(50, 'Название не должно превышать 50 символов'),

    url: z
      .string()
      .min(1, 'Ссылка обязательна для заполнения')
      .url('Введите корректную ссылку'),

    hasDescription: z.boolean(),

    description: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.hasDescription) {
      if (!data.description || data.description.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Описание обязательно при отмеченном чекбоксе',
          path: ['description'],
        });
      } else if (data.description.length < 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Описание должно содержать минимум 10 символов',
          path: ['description'],
        });
      } else if (data.description.length > 200) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Описание не должно превышать 200 символов',
          path: ['description'],
        });
      }
    }
  });

export type ValidationSchema = z.infer<typeof validationSchema>;
