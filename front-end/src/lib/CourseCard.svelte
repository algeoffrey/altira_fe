<script>
    export let title = "Course Title";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.";
    export let courseType = "Full Module Course (Certification Available)";
    export let buttonText = "Apply Here";
    export let backgroundColor = "#D1E7F9";
    export let buttonLink = "#";
</script>

<div class="rounded-sm shadow-md p-8 border border-gray-200" style="background-color: {backgroundColor};">
    <h3 class="text-xl font-semibold mb-5">{title}</h3>
    <div class="mb-5 border border-black px-2 py-1 text-xs font-light inline-block">
        {courseType}
    </div>
    <p class="text-xs mb-5 font-light">{description}</p>
    <a href={buttonLink} class="block text-left bg-white text-black font-medium py-1.5 px-3 rounded shadow-sm text-sm inline-block">
        {buttonText}
    </a>
</div>
