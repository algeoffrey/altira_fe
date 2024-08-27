<script>
    import Card from '../atoms/Card.svelte';
    import List from '../atoms/List.svelte';
  
    export let title = "Learning Method & Delivery";
    export let items = [
      "Duration is about 1.5 hours (90 minutes)",
      "Further info will be sent after registration",
      "Session check-in will open at 15 min before class begins",
      "Professional Development Live teaching session (combination of materials, cases and interactive discussion)",
      "Mixed English & Bahasa Indonesia"
    ];
    export let size = "text-base"
  </script>
  
  <Card title={title}>
    <List items={items} size = {size} />
  </Card>
  