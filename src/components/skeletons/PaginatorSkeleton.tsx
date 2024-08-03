import {
  SelectorButtonSkeleton,
  SelectorContainerSkeleton,
} from "./PaginatorSkeleton.styled";

export function PaginatorSkeleton() {
  return (
    <SelectorContainerSkeleton>
      <SelectorButtonSkeleton />
      <SelectorButtonSkeleton />
      <SelectorButtonSkeleton />
      <SelectorButtonSkeleton />
      <SelectorButtonSkeleton />
      <SelectorButtonSkeleton />
    </SelectorContainerSkeleton>
  );
}
