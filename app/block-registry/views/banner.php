<?php ob_start(); ?>
<div class="wp-block-nuk-banner">
	<div style="<?php echo esc_attr( $style_banner ); ?>" class="nuk-banner__wrapper <?php echo esc_attr( $attributes['layout'] ); ?>">
		<div style="<?php echo esc_attr( $style_text_out_wr ); ?>" class="nuk-banner__text-wrapper">
			<div style="<?php echo esc_attr( $style_text_in_wr ); ?>">
				<?php echo wp_kses_post( $content ); ?>
			</div>
		</div>
	</div>
</div>
<?php return ob_get_clean(); ?>
