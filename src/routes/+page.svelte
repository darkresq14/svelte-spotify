<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input type="text">
<select name="a" id="s">
  <option value="option">option</option>
</select>
<button>button</button>

<style lang="scss">
  h1 {
    color: red;
    font-size: functions.toRem(32);
    @include breakpoint.up('md') {
      color: blue;
    }
    @include breakpoint.up('lg') {
      color: green;
    }
  }
</style>
