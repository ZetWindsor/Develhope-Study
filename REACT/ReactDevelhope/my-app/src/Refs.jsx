import { useEffect, useRef } from 'react';

export function FocusableInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
		<h1> Proprieta REFS </h1>
      <input data-testid="one" name="one" ref={inputRef} />
    </div>
  );
}
