// TODO: Make this component generic over the item type.
// When a consumer writes <DataList items={users} renderItem={(user) => ...} />,
// the `user` parameter in renderItem should be inferred as the User type — not `any`.
// `keyExtractor` should also receive the correctly typed item.

type DataListProps<T extends Record<string, unknown>> = {
  items: T[]
  renderItem: (user: T, index: number) => React.ReactNode
  keyExtractor: (user: T) => string | number
  className?: string
}

function DataList<T extends Record<string, unknown>>({ items, renderItem, keyExtractor, className }: DataListProps<T>) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={keyExtractor ? keyExtractor(item) : index}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}


const Foo = () => {
  return (
    <DataList
      items={[{ id: 1, name: 'kalli' }, { id: 2, name: 'jon' }]}
      keyExtractor={(item) => item.id}
      renderItem={({ name }) => {
        return <p>{name}</p>
      }}
    />
  )
}


export { DataList };
