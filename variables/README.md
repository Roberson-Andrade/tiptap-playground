# Variables

The best way I found to write variables and reflect the corresponding values was with node views.

Basically I extended the mention extension passing my React component (could be in vue also, check the [docs](https://tiptap.dev/docs/editor/guide/node-views)):

```tsx
export const VariablesExtension = MentionExtension.extend({
  addNodeView() {
    return ReactNodeViewRenderer(Variable);
  },
  parseHTML() {
    return [
      {
        tag: "variable-component",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["variable-component", mergeAttributes(HTMLAttributes)];
  },
});
```

I also get the variables inside the VariableList to avoid using the `items` from suggestion utils extension:

```tsx
export const VariablesList = forwardRef<
  ReturnType<NonNullable<SuggestionOptions["render"]>>,
  SuggestionProps<VariableOption>
>(({ command }, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data, isLoading } = useQuery({
    queryKey: ["variable-options"],
    queryFn: getVariables,
  });

// component code
```

Finally, through a `ReactContext` I provided the respective values for the variables and also controlled the parsing:

```tsx
// Provider
export function VariablesContextProvider({
  children,
  parseVariables,
}: {
  children: React.ReactNode;
  parseVariables: boolean;
}) {
  const { data: values } = useQuery({
    queryKey: ["variable-values"],
    queryFn: getVariablesValues,
  });

  return (
    <VariablesContext.Provider value={{ values, parseVariables }}>
      {children}
    </VariablesContext.Provider>
  );

// VariableNode
export function Variable(props: NodeViewProps) {
  const { parseVariables, values } = useVariablesContext();
  return (
    <NodeViewWrapper className="inline w-fit">
      <span
        className={cn(
          "rounded bg-neutral-700 px-1 py-0.5 text-custom-primary-100"
        )}
      >
        {parseVariables
          ? values?.find((value) => value.id === props.node.attrs.id)?.value ??
            `variable not found`
          : `@${props.node.attrs.label}`}
      </span>
    </NodeViewWrapper>
  );
}
```
