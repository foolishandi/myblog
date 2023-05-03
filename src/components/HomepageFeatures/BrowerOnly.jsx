export default MyBrowserOnly = () => {
  return (
    <BrowserOnly
      fallback={<div>The fallback content to display on prerendering</div>}
    >
      {() => {
        // Something that should be excluded during build process prerendering.
      }}
    </BrowserOnly>
  );
};
