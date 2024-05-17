import { getVariables } from "@/api";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { VariableOption } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { SuggestionOptions, SuggestionProps } from "@tiptap/suggestion";
import { forwardRef, useImperativeHandle, useState } from "react";

export const VariablesList = forwardRef<
  ReturnType<NonNullable<SuggestionOptions["render"]>>,
  SuggestionProps<VariableOption>
>(({ command }, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data, isLoading } = useQuery({
    queryKey: ["variable-options"],
    queryFn: getVariables,
  });

  const items = data ?? [];

  const selectItem = (index: number) => {
    const item = items[index];

    if (item) {
      command(item);
    }
  };

  const upHandler = () => {
    setSelectedIndex((selectedIndex + items.length - 1) % items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div className="min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md flex flex-col gap-1">
      {isLoading ? (
        <>
          <Skeleton className="h-8 w-[8rem]" />
          <Skeleton className="h-8 w-[8rem]" />
          <Skeleton className="h-8 w-[8rem]" />
          <Skeleton className="h-8 w-[8rem]" />
        </>
      ) : (
        items.map((item, index) => (
          <button
            className={cn(
              "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full",
              index === selectedIndex && "bg-accent text-accent-foreground"
            )}
            key={item.id}
            onClick={() => selectItem(index)}
          >
            {item.label}
          </button>
        ))
      )}
    </div>
  );
});
