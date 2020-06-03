<?php ob_start(); ?>
<div class="wp-block-nuk-int-pack wp-block-nuk-int-pack--<?php echo esc_attr( $attributes['packType'] ); ?>">
	<?php
		if ( 'yes' === $attributes['packType'] && $attributes['packHighlightText'] ) {
			printf(
				'<div class="nuk-int-pack__highlight-text">%s</div>',
				wp_kses_post( $attributes['packHighlightText'] )
			);
		}
	?>
	<div class="nuk-int-pack__intro">
		<div class="nuk-int-pack__pack-title">
			<?php echo wp_kses_post( $attributes['title'] ); ?>
		</div>
		<div class="nuk-int-pack__pack-description">
			<?php echo wp_kses_post( $attributes['description'] ); ?>
		</div>
	</div>
	<div class="nuk-int-pack__pricing">
		<div class="nuk-int-pack__price">
			<?php echo wp_kses_post( $attributes['price'] ); ?>
		</div>
		<div class="nuk-int-pack__frequency">
			<?php echo wp_kses_post( $attributes['frequency'] ); ?>
		</div>
		<a href="<?php echo esc_url( $attributes['cta']['url'] ); ?>" class="nuk-int-pack__cta">
			<?php echo wp_kses_post( $attributes['cta']['text'] ) ?>
		</a>
	</div>
	<div class="nuk-int-pack__entitlements">
		<div class="nuk-int-pack__entitlements-title"><?php esc_html__( "What's included", 'nuk-blocks' ); ?></div>
			<?php foreach ( $attributes['entitlements'] as $entitlement ) :
				$text = $entitlement['text'];
				$icon = $entitlement['icon'];
				$is_image = $entitlement['isImage'];
			?>
			<div class="nuk-int-pack__entitlement-row">
				<div class="nuk-int-pack__entitlement-row-wrapper nuk-int-pack__entitlement-row-wrapper--<?php echo esc_attr( $icon ); ?>">
					<?php
						if ( 'yes' === $icon ) {
							printf( '<svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" class="dashicon dashicons-yes nuk-int-pack__entitlement-icon"><path d="M14.83 4.89l1.34.94-5.81 8.38H9.02L5.78 9.67l1.34-1.25 2.57 2.4z"></path></svg>' );
						}

						if ( 'no' === $icon ) {
							printf( '<svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" class="dashicon dashicons-no-alt nuk-int-pack__entitlement-icon"><path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"></path></svg>' );
						}
					?>
					<div class="nuk-int-pack__entitlement-item"><?php echo wp_kses_post( $text ); ?></div>
				</div>
			</div>
			<?php endforeach ;?>
	</div>
</div>
<?php return ob_get_clean(); ?>
