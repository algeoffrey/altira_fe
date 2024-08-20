<script>
  import QuoteText from '../atoms/QuoteText.svelte';
  import QuoteAuthor from '../atoms/QuoteAuthor.svelte';

  export let quote = "You Can Systematize Innovation, <br />Even If You Can't Completely Predict It.";
  export let author = "Eric Schmidt, Ex-CEO, Board Member, Alphabet Inc. (Google)";
  export let quoteColor = "#6044fc";
  export let authorColor = "#000000";  
</script>

<section class="flex flex-col items-center justify-center text-center py-20 md:py-24 my-8">
  <QuoteText {quote} {quoteColor} />
  <QuoteAuthor {author} {authorColor} />
</section>
