import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar, InnerBlocks } = wp.blockEditor;

import './accordion.scss';

registerBlockType( 'newsuk/accordion-item', {
	title: 'Accordion Item',
	icon: 'universal-access-alt',
	category: 'newsuk',
	supports: {
		align: false,
	},
	attributes: {
		titleText: {
			type: 'string',
            source: 'html',
			selector: '.accordion-item__title-text',
			default: '',
		},
		align: {
			type: 'string',
			default: 'wide',
		},
		alignment: {
            type: 'string',
            default: 'none',
        },
	},
	edit: class extends React.Component {

		constructor() {
			super();

			this.state = {
				showDescription: false,
			}

			this.toggleDescription = this.toggleDescription.bind( this );
		}

		toggleDescription() {
			this.setState( {
				showDescription: ! this.state.showDescription,
			} );
		}

		render() {
			const { attributes: { titleText, alignment }, setAttributes, isSelected } = this.props;
			const { showDescription } = this.state;

			const STYLE_ACC_ITEM = {
				width: '100%',
				margin: '0 auto',
				textAlign: alignment,
			};

			return (
				<div className="wp-block-newsuk-accordion-item--editor" style={ STYLE_ACC_ITEM }>
					<BlockControls>
						<AlignmentToolbar
							value={ alignment }
							onChange={ ( newAlignment ) => setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } ) }
						/>
					</BlockControls>
					<div className={ `accordion-item__title ${ showDescription ? 'nuk-is-opened' : '' }` } onClick={ this.toggleDescription }>
						<RichText
							tagName="div"
							value={ titleText }
							className="accordion-item__title-text"
							onChange={ ( titleText ) => setAttributes( { titleText } ) }
							placeholder="Heading..."
						/>
					</div>
					{ ( showDescription ) && ( <div className="accordion-item__description">
						<InnerBlocks
							renderAppender={ () => isSelected ? <InnerBlocks.ButtonBlockAppender /> : false }
						/>
					</div> ) }
				</div>
			);
		}
	},
	save( props ) {
		const { attributes: { titleText, alignment } } = props;

		const STYLE_ACC_ITEM = {
			width: '100%',
			margin: '0 auto',
			textAlign: alignment,
		};

		return (
			<div style={ STYLE_ACC_ITEM }>
				<div className="accordion-item__title">
					<RichText.Content
						tagName="div"
						style={ STYLE_ACC_ITEM }
						className="accordion-item__title-text"
						value={ titleText }
					/>
				</div>
				<div className="accordion-item__description">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );
