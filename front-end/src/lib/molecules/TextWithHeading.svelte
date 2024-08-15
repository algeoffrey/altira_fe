<script>
  import Heading from '/src/lib/atoms/CardTitle.svelte';
  import Paragraph from '/src/lib/atoms/Paragraph.svelte';
  import MissionStatement from '/src/lib/molecules/MissionStatement.svelte';
  import StoryStatement from '/src/lib/molecules/StoryStatement.svelte';

  export let heading = "Heading";
  export let content = [];
  export let type = "paragraph"; // "paragraph", "mission", or "story"
</script>

<div>
  <Heading text={heading} align="text-left" size = 'text-base' />
  {#if type === "paragraph"}
      <Paragraph text={content} alignment="text-left" />
  {:else if type === "mission"}
      <MissionStatement items={content} />
  {:else if type === "story"}
      <StoryStatement items={content} />
  {/if}
</div>
