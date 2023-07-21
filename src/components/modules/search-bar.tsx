import { FlexBox, Button, Input } from "@ui5/webcomponents-react";
import { useState } from "react";

type Props = {
  onSearch: (searchTerm: string) => Promise<void>;
  onReset: () => void;
};

export const SearchBar = ({ onReset, onSearch }: Props) => {
  const [query, setQuery] = useState<string | undefined>("");

  async function handleSearch() {
    await onSearch(query as string);
  }

  async function handleReset() {
    setQuery("");
    onReset();
  }

  return (
    <FlexBox
      alignItems="Center"
      direction="Row"
      justifyContent="SpaceBetween"
      wrap="Wrap"
      fitContainer
      style={{ maxWidth: "350px" }}
    >
      <Input
        type="Text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <Button
        design="Emphasized"
        accessibleName="Search"
        onClick={handleSearch}
      >
        Search
      </Button>
      <Button design="Default" accessibleName="Reset" onClick={handleReset}>
        Reset
      </Button>
    </FlexBox>
  );
};
