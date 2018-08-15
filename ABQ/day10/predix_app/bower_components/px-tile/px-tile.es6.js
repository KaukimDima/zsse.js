(function() {
  Polymer({

    is: 'px-tile',

    properties: {
      /**
       * If true, hovering over the card will cause an overlay to appear
       * with more detailed information, including the description
       * and an optional slot for showing a footer at the bottom.
       * _Note: not recommended for mobile applications due to variation
       * or lack of support for hover on mobile devices._
       */
      hoverable: {
        type: Boolean,
        value: false,
        observer: '_hoverableChanged'
      },
      /**
       * Whether the tile is currently being hovered.
       */
      _hovered: {
        type: Boolean,
        value: false
      },
      /**
       * Main text label for the tile.
       */
      mainTitle: {
        type: String,
        value: '',
        observer: '_onDataChanged'
      },
      /**
       * Subtitle text for the tile.
       */
      subtitle: {
        type: String,
        value: '',
        observer: '_onDataChanged'
      },
       /**
        * Description information to be displayed underneath tile and subtitle.
        * Default : Only the first ~3 lines of text will be displayed, after which it will be truncated.
        * You can customize by adjusting the `--px-tile-desc-text-height` CSS variable. (e.g. 1 line = 1 rem,
        * to set to 5 lines truncated, set `--px-tile-desc-text-height: 5rem`).
       */
      description: {
        type: String,
        value: '',
        observer: '_onDataChanged'
      },
      /**
       * Description information to be displayed in the overlay of a hoverable card.
       * It has more space to display text content and can be adjusted along with
       * total height of the tile.
       */
      overlayDescription: {
        type: String,
        value: '',
        observer: '_onDataChanged'
      },
      /**
       * Configuration object for the action buttons displayed in the tile.
       * The primary button is displayed in the header/title area of the tile
       * whereas the rest are displayed at the bottom of the tile.
       * The `px-tile-action-tapped` event is fired when any of the action buttons is tapped.
       */
      actionButtons: {
        type: Object,
        value: {},
        observer: '_actionButtonsChanged'
      }
    },
    /**
     * Method used internally for flipping the hovered status of a tile.
     */
    _hover() {
      if(this.hoverable) {
        this._hovered = !this._hovered;
      }
    },
    /**
     * On change callback to remove overlay
     */
    _hoverableChanged() {
      this.$.overlay.classList.add('overlay-remove');
      if(this.hoverable) {
        this.$.overlay.classList.remove('overlay-remove');
        // extract overlay text color to pass to other components
        this._hoverTextColor = window.getComputedStyle(this.$.overlay).color;
      }
    },
    /**
     * Attach event listeners for hoverable tiles.
     */
    attached() {
      this.listen(this.$.overlay, 'mouseenter', '_hover');
      this.listen(this.$.overlay, 'mouseleave', '_hover');
    },
    /**
     * Detach event listeners for hoverable tiles.
     */
    detached() {
      this.unlisten(this.$.overlay, 'mouseenter');
      this.unlisten(this.$.overlay, 'mouseleave');
    },
    /**
     * Returns class to control overlay for hoverable tiles.
     */
    _getClass(hovered) {
      return hovered ? 'hovered' : '';
    },
    /**
     * On change callback for actionButtons to set _hasActionButtons and _hasPrimaryBtn flag
     */
    _actionButtonsChanged() {
      this._hasPrimaryBtn = false;
      this._hasActionButtons = this.actionButtons && this.actionButtons.items && this.actionButtons.items.length > 0;
      if(this._hasActionButtons) {
        let maxPrimaryButtons = this.actionButtons.maxPrimaryButtons || 1;
        for(let x in this.actionButtons.items) {
          if(this.actionButtons.items[x].isPrimary) {
            this._hasPrimaryBtn = true;
            break;
          }
        }
      }
      this._onDataChanged();
    },
    /**
     * On change callback for either property to set _hasTitleActionBtn, _hasTitleSubtitleActionBtn, and _hasData flags
     */
    _onDataChanged() {
      this._hasTitleActionBtn = this.mainTitle && this.mainTitle.length > 0|| this._hasPrimaryBtn;
      this._hasTitleSubtitleActionBtn = this.subtitle && this.subtitle.length > 0 || this._hasTitleActionBtn;
      this._hasData = this._hasActionButtons || this._hasTitleSubtitleActionBtn;
    }
    /**
     * @event px-tile-action-tapped
     *
     * Event fired when an item from actionButtons is tapped. `Evt.detail` includes the details of the tapped item, e.g. `{"id": "1", "label": "Favorite"}`
     *
     * Usage:
     * ```
     * window.addEventListener('px-tile-action-tapped', function(evt){
     *   console.log(evt.detail);
     * });
     * ```
     */
  });
})();
