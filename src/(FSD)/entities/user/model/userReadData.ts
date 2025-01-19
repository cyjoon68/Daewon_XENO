import { cache } from "react";
import { SupabaseServerApi } from "@/(FSD)/shareds/api";

export const userReadData = cache(async () => {
    const supabase = await SupabaseServerApi()

    const { data: { user } } = await supabase.auth.getUser();

    return user;
});

