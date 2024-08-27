<script>
    import CardTitle from '../atoms/CardTitle.svelte';
    import Paragraph from '../atoms/Paragraph.svelte';
    import List from '../atoms/List.svelte';
  
    export let title = "Section Title";
    export let titleSize = "text-[1.7rem]";
    export let titleWeight = "font-bold";
    export let content = "";
    export let items = [];
  </script>
  
  <div class="mb-6">
    <CardTitle text={title} size= {titleSize} weight={titleWeight} align="text-left" />
    <Paragraph text={content} textAlign="text-left" />
    <List items={items} />
  </div>
  