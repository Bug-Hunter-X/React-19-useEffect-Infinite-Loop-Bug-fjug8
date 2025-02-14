```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    if (count !== prevCount) {
      console.log('Count updated:', count);
      setPrevCount(count);
    }
  }, [count, prevCount]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```