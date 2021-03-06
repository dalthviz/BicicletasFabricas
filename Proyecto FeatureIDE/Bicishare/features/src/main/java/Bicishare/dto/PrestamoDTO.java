package Bicishare.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import java.util.ArrayList;
import java.util.Date;

/**
 * @generated
 * @author eaperador
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class PrestamoDTO {

	public PrestamoDTO() {
		// constructor base
	}

	public PrestamoDTO(Long id) {
		this.id = id;
	}

	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @generated
	 */
	private String fechaInicio;

	/**
	 * @generated
	 */
	private String fechaFin;

	/**
	 * @generated
	 */
	private String fechaRealDevolucion;
	
	/**
	 * @generated
	 */
	private List<BicicletaDTO> bicicleta;

	public List<BicicletaDTO> getBicicleta() {
		if (this.bicicleta == null) {
			bicicleta = new ArrayList<BicicletaDTO>();
		}
		return bicicleta;
	}

	public void setBicicleta(List<BicicletaDTO> bicicleta) {
		this.bicicleta = bicicleta;
	}

	/**
	 * @generated
	 */
	private MultaDTO multa;

	/**
	 * @generated
	 */
	private List<AccesorioDTO> accesorios;

	public List<AccesorioDTO> getAccesorios() {
		if (this.accesorios == null) {
			accesorios = new ArrayList<AccesorioDTO>();
		}
		return accesorios;
	}

	public void setAccesorios(List<AccesorioDTO> accesorios) {
		this.accesorios = accesorios;
	}

	/**
	 * @generated
	 */
	private UsuarioDTO usuario;

	/**
	 * @generated
	 */
	private PagoDTO pago;

	/**
	 * @return
	 * @generated
	 */
	public String getFechaInicio() {
		return this.fechaInicio;
	}

	/**
	 * @param
	 * @generated
	 */
	public void setFechaInicio(String fechaInicio) {
		this.fechaInicio = fechaInicio;
	}
	
	public String getFechaRealDevolucion() {
		return this.fechaRealDevolucion;
	}

	public void setFechaRealDevolucion(String fechaRealDevolucion) {
		this.fechaRealDevolucion = fechaRealDevolucion;
	}

	/**
	 * @return
	 * @generated
	 */
	public String getFechaFin() {
		return this.fechaFin;
	}

	/**
	 * @param
	 * @generated
	 */
	public void setFechaFin(String fechaFin) {
		this.fechaFin = fechaFin;
	}

	/**
	 * @return
	 * @generated
	 */
	public MultaDTO getMulta() {
		return this.multa;
	}

	/**
	 * @param
	 * @generated
	 */
	public void setMulta(MultaDTO multa) {
		this.multa = multa;
	}

	/**
	 * @return
	 * @generated
	 */
	public UsuarioDTO getUsuario() {
		return this.usuario;
	}

	/**
	 * @param
	 * @generated
	 */
	public void setUsuario(UsuarioDTO usuario) {
		this.usuario = usuario;
	}

	/**
	 * @return
	 * @generated
	 */
	public PagoDTO getPago() {
		return this.pago;
	}

	/**
	 * @param
	 * @generated
	 */
	public void setPago(PagoDTO pago) {
		this.pago = pago;
	}

}
