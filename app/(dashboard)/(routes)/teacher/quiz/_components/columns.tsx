"use client"

import { QuizForms } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";


export const columns: ColumnDef<QuizForms>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Название теста
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  
  {
    id: "acctions",
    header:"Действия",
    cell:({ row }) =>{
        const { id }=row.original;

        return(
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="ghost" className="h-4 w-8 p-0">
                        <span className="sr-only">Открыть меню</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <Link href={`/teacher/quiz/${id}`}>
                        <DropdownMenuItem>
                            <Pencil className="h-4 w-4 mr-2"/>
                            Редактировать
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
  }
]
