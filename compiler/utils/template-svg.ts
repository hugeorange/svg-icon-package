import prettier from 'prettier';
import XString, { toCamelCase } from './XmlString';

export default (name: string, content: string): string => {
  const xml = new XString(
    prettier.format(content, {
      parser: 'babel',
      tabWidth: 4,
    }),
  );
  const defaultSize = xml.getSize('height');
  const defaultColor = xml.getColor(xml.isWithStroke() ? 'stroke' : 'fill');
  xml
    .setSize('width', '"${size}"')
    .setSize('height', '"${size}"')
    .setColor('fill', '"${color}"')
    .setColor('stroke', '"${color}"');
  const str = `
	/**
	 * @file ${toCamelCase(name)}
	 * @author Auto Generated by IconGarden
	 */
	import { IIconProps } from '../interface';
	
	export default ({
		size = ${defaultSize},
		color = "${defaultColor}",
	}: IIconProps) => (
		\`<?xml version="1.0" encoding="UTF-8"?>\n${xml.toString()}\`
	);
	`;
  return prettier.format(str, {
    parser: 'babel',
    tabWidth: 4,
  });
};
