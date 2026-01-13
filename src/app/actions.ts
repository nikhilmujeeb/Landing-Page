"use server";

import { table } from "@/lib/airtable";

export async function submitRSVP(
  prevState: { success: boolean },
  formData: FormData
) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    await table.create([
      {
        fields: {
          Name: name,
          Email: email,
        },
      },
    ]);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
