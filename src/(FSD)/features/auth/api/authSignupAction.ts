"use server";

import { SupabaseServerApi } from "@/(FSD)/shareds/api";
import type { AuthUserType } from "../type/AuthUser.type";

export const authSignupAction = async (user: AuthUserType) => {
    const { email, password } = user;

    const supabase = await SupabaseServerApi();

    return await supabase.auth.signUp({  email, password });
};
