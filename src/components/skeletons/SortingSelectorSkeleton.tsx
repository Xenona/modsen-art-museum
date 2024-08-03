import {
  SelectorButtonSkeleton,
  SelectorContainerSkeleton,
} from "./PaginatorSkeleton.styled";
import { SelectorSortSkeleton } from "./SortingSelectorSkeleton.styled";

export function SortingSelectorSkeleton() {
  return (
    <SelectorContainerSkeleton>
      <SelectorButtonSkeleton />
      <SelectorSortSkeleton />
      <SelectorButtonSkeleton />
    </SelectorContainerSkeleton>
  );
}
