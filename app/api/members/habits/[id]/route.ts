import { NextRequest, NextResponse } from "next/server";
import { DeleteHabitUsecase } from "@/application/usecase/habit/DeleteHabitUsecase";
import { SbHabitRepository } from "@/infra/repositories/supabase/SbHabitRepository";
import { getMemberIdFromToken } from "@/utils/auth";
import { UpdateHabitDto } from "@/application/usecase/habit/dto/UpdateHabitDto";
import { UpdateHabitUsecase } from "@/application/usecase/habit/UpdateHabitUsecase";

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await params;
        const habitId = Number(id);
        const usecase = new DeleteHabitUsecase(new SbHabitRepository());
        await usecase.execute(habitId);

        return NextResponse.json({ message: "습관 삭제 완료" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await params;
        const { categoryId, name, description, finishedAt } = await req.json();

        const authHeader = req.headers.get("authorization");
        const memberId = await getMemberIdFromToken(authHeader!);

        const dto = new UpdateHabitDto(
            Number(id),
            memberId!,
            categoryId,
            name,
            description,
            finishedAt,
        );
        const usecase = new UpdateHabitUsecase(new SbHabitRepository());
        await usecase.execute(dto);

        return NextResponse.json({ message: "습관 수정 완료" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
