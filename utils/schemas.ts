/** @format */

import * as z from "zod";
import { ZodSchema } from "zod";

export const UserSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must be at most 15 characters"),
  email: z
    .string()
    .min(3, "Email must be at least 3 characters")
    .max(15, "Email must be at most 15 characters"),
  password: z
    .string()
    .email("Invalid email")
    .min(6, "Passwrod must be at least 6 characters")
    .max(255, "Passwrod must be at most 255 characters"),
  hashedPassword: z
    .string()
    .email("Invalid email")
    .min(6, "Passwrod must be at least 6 characters")
    .max(255, "Passwrod must be at most 255 characters"),
});

export const profileSchema = z.object({
  // firstName: z.string().max(5, { message: 'max length is 5' }),
  firstName: z.string().min(2, {
    message: "first name must be at least 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "last name must be at least 2 characters",
  }),
  Name: z.string().min(2, {
    message: " Name is absent",
  }),
  username: z.string().min(2, {
    message: "username must be at least 2 characters",
  }),
});

export function validateWithZodSchema<T, FormData>(
  schema: ZodSchema<T>,
  data: FormData
): T {
  const result = schema.safeParse(data);
  console.log(result);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}

export function ValidateFormWithZodSchema<T, FormData>(
  schema: ZodSchema<T>,
  data: FormData,
  prevState: any
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    let errorMessage = "";
    return {
      ...prevState,
      zodErrors: result.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage + issue.path[0] + ": " + issue.message + ". ";
      }),
    };
  }
  return {
    ...prevState,
    data: result?.data,
  };
}

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  Title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(100, {
      message: "Title must be less than 100 characters.",
    }),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive number.",
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    }
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    message: "guest amount must be a positive number.",
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: "bedrooms amount must be a positive number.",
  }),
  beds: z.coerce.number().int().min(0, {
    message: "beds amount must be a positive number.",
  }),
  baths: z.coerce.number().int().min(0, {
    message: "bahts amount must be a positive number.",
  }),
  amenities: z.string(),
});

export const PdtSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(100, {
      message: "Title must be less than 100 characters.",
    }),
  costPrice: z.coerce.number().int().min(0, {
    message: "Cost price must be a positive number.",
  }),
  sellingPrice: z.coerce.number().int().min(0, {
    message: "Selling price must be a positive number.",
  }),
  category: z
    .string()
    .min(2, {
      message: "Category must be at least 2 characters.",
    })
    .max(100, {
      message: "Category must be less than 100 characters.",
    }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 5 && wordCount <= 15;
    },

    {
      message: "Description must be between 5 and 15 words.",
    }
  ),
});

export type PdtSchemaType = z.infer<typeof PdtSchema>;
export type ProductSchemaType = z.infer<typeof ProductSchema>;
export type UserSchemaType = z.infer<typeof UserSchema>;
export type CategorySchemaType = z.infer<typeof CategorySchema>;
// export type EmployeeSchemaType = z.infer<typeof EmployeeSchema>;
// export type PdtSchemaType = z.infer<typeof PdtSchema>;
// export type PdtSchemaType = z.infer<typeof PdtSchema>;
// export type PdtSchemaType = z.infer<typeof PdtSchema>;
// export type PdtSchemaType = z.infer<typeof PdtSchema>;
// export type PdtSchemaType = z.infer<typeof PdtSchema>;
// export type PdtSchemaType = z.infer<typeof PdtSchema>;
// export type PdtSchemaType = z.infer<typeof PdtSchema>;

// .refine(
//   (description) => {
//     const wordCount = description.split(" ").length;
//     return wordCount >= 10 && wordCount <= 1000;
//   },
//   {
//     message: "description must be between 10 and 1000 words.",
//   }
// );

export const CategorySchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(100, {
      message: "Title must be less than 100 characters.",
    }),

  slug: z
    .string()
    .min(2, {
      message: "Slug must be at least 2 characters.",
    })
    .max(100, {
      message: "Slug must be less than 100 characters.",
    }),

  userId: z
    .string()
    .min(10, {
      message: "Slug must be at least 100 characters.",
    })
    .max(200, {
      message: "Slug must be less than 200 characters.",
    }),

  imageUrl: z
    .string()
    .min(2, {
      message: "Slug must be at least 2 characters.",
    })
    .max(1000, {
      message: "Slug must be less than 1000 characters.",
    }),

  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },

    {
      message: "Description must be between 10 and 1000 words.",
    }
  ),
});

// export const  UserSchema = z.object({
//   title: z
//     .string()
//     .min(2, {
//       message: "Title must be at least 2 characters.",
//     })
//     .max(100, {
//       message: "Title must be less than 100 characters.",
//     }),

//   slug: z
//     .string()
//     .min(2, {
//       message: "Slug must be at least 2 characters.",
//     })
//     .max(100, {
//       message: "Slug must be less than 100 characters.",
//     }),

//   imageUrl:z
//     .string()
//     .min(2, {
//       message: "Slug must be at least 2 characters.",
//     })
//     .max(1000, {
//       message: "Slug must be less than 1000 characters.",
//     }),

//   description: z.string().refine(
//     (description) => {
//       const wordCount = description.split(" ").length;
//       return wordCount >= 10 && wordCount <= 1000;
//     },

//     {
//       message: "Description must be between 10 and 1000 words.",
//     }
//   ),
// });

export const ProductSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(100, {
      message: "Title must be less than 100 characters.",
    }),
  employeeName: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(100, {
      message: "Title must be less than 100 characters.",
    }),

  userId: z
    .string()
    .min(10, {
      message: "user must be at least 10 characters.",
    })
    .max(200, {
      message: "user must be less than 200 characters.",
    }),

  category: z
    .string()
    .min(2, {
      message: "Category must be at least 1 characters.",
    })
    .max(200, {
      message: "Category must be less than 200 characters.",
    }),

  quantityInHand: z.coerce.number().int().min(0, {
    message: "Cost Qtty In Hand must be a positive number.",
  }),

  costPrice: z.coerce.number().int().min(0, {
    message: "Cost price must be a positive number.",
  }),
  sellingPrice: z.coerce.number().int().min(0, {
    message: "Selling price must be a positive number.",
  }),
  imageUrl: z
    .string()
    .min(2, {
      message: "Slug must be at least 2 characters.",
    })
    .max(1000, {
      message: "Slug must be less than 1000 characters.",
    }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },

    {
      message: "Description must be between 10 and 1000 words.",
    }
  ),
});

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 2048 * 2048;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File size must be less than 2 MB`)
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
}
