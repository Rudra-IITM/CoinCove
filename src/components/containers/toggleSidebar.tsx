import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Sidebar from "../sidebar"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
            <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
