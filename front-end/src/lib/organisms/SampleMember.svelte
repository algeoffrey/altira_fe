<script>
    // Sample team members array
    export let teamMembers = [
        { name: "Adriani Onie", id: "adriani-onie" },
        { name: "Adrianto Hermawi", id: "adrianto-hermawi" },
        { name: "Annie Koh", id: "annie-koh" },
        { name: "Arya Setiadharma", id: "arya-setiadharma" },
        { name: "Carlson Lau", id: "carlson-lau" },
        { name: "Daniel Budiman", id: "daniel-budiman" },
        { name: "Jeffrey Paine", id: "jeffrey-paine" },
        { name: "Kevin Sutantyo", id: "kevin-sutantyo" },
        { name: "Lesley Bendig", id: "lesley-bendig" },
        { name: "M. Renaldi Zulkarnain", id: "renaldi-zulkarnain" },
        { name: "Marnix Mulder", id: "marnix-mulder" },
        { name: "Robert W. van Zwieten", id: "robert-van-zwieten" },
        { name: "Shiyan Koh", id: "shiyan-koh" },
        { name: "Stephanie Hermawan", id: "stephanie-hermawan" },
        { name: "Venkat Narayan", id: "venkat-narayan" },
    ];
</script>

<section class="py-16 bg-[#F8F8F8]">
    <div class="mx-32 max-w-8xl">
        <div class="grid grid-cols-8 gap-4">
            {#each teamMembers as member}
                <a href={"#" + member.id} class="inline text-base p-2 font-thin bg-white rounded-lg shadow text-center hover:bg-gray-200 transition">
                    {member.name}
                </a>
            {/each}
        </div>
    </div>
</section>
