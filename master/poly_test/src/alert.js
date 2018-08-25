
{
    [['important', 'Oops'], ['warning', 2], 3].map((el, i) =>
        <px-alert-label ref={(n) => this.$alertLabel = n}
            type={el[0]}
            label={el[1]}
        >
        </px-alert-label>
    )
}

<px-alert-label ref={(n) => this.$alertLabel = n}
    badge={true}
    type="important">
</px-alert-label>