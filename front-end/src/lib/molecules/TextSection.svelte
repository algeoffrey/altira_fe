<script>
    import CardTitle from '../atoms/CardTitle.svelte';
    import Paragraph from '../atoms/Paragraph.svelte';
  
    export let title = "Section Title";
    export let titleSize = "md:text-[1.7rem]";
    export let titleWeight = "font-bold";
    export let titleGap = "mb-4"
    export let content = "";
  </script>
  
  <div class="mb-6">
    <div class="{titleGap} mr-12">
        <CardTitle text={title} size= {titleSize} weight={titleWeight} align="text-left"/>
    </div>
    <Paragraph text={content} textAlign="text-left" />
  </div>
  